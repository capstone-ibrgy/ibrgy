import React, { useEffect, useReducer, useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'
import { getDocuments, getMyNotifications, onSnapshot } from '../api/services';

const Landingpage = (props) => {

  let ids = JSON.parse(localStorage.getItem("notifications"));
  const [screen, setScreen] = useState(0);
  const [notifCount, setCount] = useState(0);
  const [reads, setReads] = useState(ids || []);

  const [notifs, setNotifs] = useReducer((prev, next) => {
    return { ...prev, ...next }
  },
    {
      fetchState: 0,
      notifs: [],
      count: 0
    });


  const [documents, setDocuments] = useReducer((prev, next) => {
    return { ...prev, ...next }
  },
    {
      fetchState: 0,
      documents: [
        {
          id: "cedula",
          name: "Community Tax Certificate (Cedula)",
          description: "An official identification document proving that the holder has paid the required community or residence tax. It includes personal information and is commonly used for various transactions and government-related activities.",
          price: 50
        },
        {
          id: "clearance",
          name: "Barangay Clearance",
          description: "A document verifying that the individual or business requesting it is in compliance with community regulations and has settled any necessary fees. It is often required for various transactions, such as business permits or employment purposes.",
          price: 50
        },
        {
          id: "residency",
          name: "Certificate of Residency",
          description: "An official document confirming an individual's current residence in the barangay. t is often required for various purposes, such as school enrollment, tax-related matters, or eligibility for certain benefits or services.",
          price: 50
        },
        {
          id: "indigency",
          name: "Certificate of Indigency",
          description: "An official document issued to individuals who are economically disadvantaged or financially incapable. It serves as proof of the individual's inability to pay certain fees, allowing them to access government services or avail of assistance programs with reduced or waived charges.",
          price: "Free"
        }
      ],
      count: 0
    });

  useEffect(() => {
    if (!notifs['notifs']) return;

    if (screen == 6) {
      const notifId = notifs['notifs'].map((item) => item.id);
      setTimeout(() => {
        localStorage.setItem("notifications", JSON.stringify(notifId));
        setReads(notifId)

      }, 5000);
    }

  }, [screen]);

  useEffect(() => {
    const query = getDocuments();

    try {
      const unsub = onSnapshot(query, snapshot => {
        if (!snapshot) {
          setDocuments({ fetchState: -1 })
          return
        }

        if (snapshot.empty) {
          setDocuments({ fetchState: 2 })
          return
        }

        const docs = snapshot.docs.map((doc) => doc.data());
        setDocuments({
          documents: docs,
          fetchState: 1,
          length: docs.length
        })
      })

      return () => {
        unsub()
      }

    } catch (err) {
      console.log(err)
      setDocuments({ fetchState: -1 })
    }
  }, []);

  useEffect(() => {
    const query = getMyNotifications(props.profile.userId);

    try {
      const unsub = onSnapshot(query, (snapshot) => {

        if (!snapshot) {
          setNotifs({ fetchState: -1 })
          return;
        }

        if (snapshot.empty) {
          setNotifs({ fetchState: 2 })
          return;
        }

        const data = snapshot.docs.map((doc) => {
          let newData = doc.data();
          newData['id'] = doc.id;

          return newData;
        });

        setCount(data.length);
        setNotifs({
          notifs: data,
          fetchState: 1,
          count: data.length
        })
      });

      return () => {
        unsub();
      };
    } catch (err) {
      console.log(err);
      setNotifs({ fetchState: -1 })
    }
  }, []);

  return <>
    <div className='relative overflow-hidden w-full flex flex-col bg-white'>
      <Navbar2
        notif={notifCount - reads.length}
        documents={documents}
        profile={props.profile}
        useAuth={useAuth}
        setScreen={setScreen}
        className='' />
      <div className='h-screen flex flex-row'>
        <Sidebar
          services={documents}
          screen={screen}
          setScreen={setScreen}
          className='flex-1' />
        <Dashboard
          notifs={notifs}
          documents={documents}
          setScreen={setScreen}
          screen={screen}
          profile={props.profile}
          reads={reads}
        />
      </div>
    </div>
  </>
}

export default Landingpage