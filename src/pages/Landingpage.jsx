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
          description: "The official document verifying the resident's financial hardship, qualifying them for social welfare benefits. It serves as proof of their economic disadvantage and is required when applying for government assistance programs, medical aid, or other forms of support for those in need.",
          price: 50
        },
        {
          id: "clearance",
          name: "Barangay Clearance",
          description: "The official document verifying the resident's financial hardship, qualifying them for social welfare benefits. It serves as proof of their economic disadvantage and is required when applying for government assistance programs, medical aid, or other forms of support for those in need.",
          price: 50
        },
        {
          id: "residency",
          name: "Certificate of Residency",
          description: "The official document verifying the resident's financial hardship, qualifying them for social welfare benefits. It serves as proof of their economic disadvantage and is required when applying for government assistance programs, medical aid, or other forms of support for those in need.",
          price: 50
        },
        {
          id: "indigency",
          name: "Certificate of Indigency",
          description: "The official document verifying the resident's financial hardship, qualifying them for social welfare benefits. It serves as proof of their economic disadvantage and is required when applying for government assistance programs, medical aid, or other forms of support for those in need.",
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