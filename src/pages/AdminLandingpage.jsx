import React, { useState, useEffect, useReducer } from "react";
import { useAuth } from "../auth/AuthContext";
import AdminNavbar2 from "../components/AdminNavbar2";
import AdminSidebar from "../components/AdminSidebar";
import Dashboard2 from "../pages/Dashboard2";
import { getAllRequestForms, getDocuments, getNotifications, onSnapshot } from '../api/services';

const AdminLandingpage = (props) => {

  let ids = JSON.parse(localStorage.getItem("admin_notifications"));
  const [screen, setScreen] = useState(0);
  const [notifCount, setCount] = useState(0);
  const [reads, setReads] = useState(ids || []);
  const [rawRequests, setRawRequests] = useState([]);

  const [notifs, setNotifs] = useReducer((prev, next) => {
    return { ...prev, ...next }
  },
    {
      fetchState: 0,
      notifs: [],
      count: 0
    });

  const [requests, setRequests] = useReducer((prev, next) => {
    return { ...prev, ...next }
  },
    {
      fetchState: 0,
      requests: [],
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
        localStorage.setItem("admin_notifications", JSON.stringify(notifId));
        setReads(notifId)

      }, 1000);
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

        let docs = snapshot.docs.map((doc) => doc.data());

        docs.sort(function (a, b) {
          return new Date(a.createdAt.toDate()) - new Date(b.createdAt.toDate());
        });

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
    const query = getNotifications();

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

        const data = snapshot.docs.map((doc) => doc.data());

        setCount(data.length)
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

  useEffect(() => {
    const query = getAllRequestForms();

    try {
      const unsub = onSnapshot(query, (snapshot) => {
        if (!snapshot) {
          setRequests({ fetchState: -1 })
          return;
        }

        if (snapshot.empty) {
          setRequests({ fetchState: 2 })
          return;
        }

        const forms = snapshot.docs.map((doc) => {
          const { lastname, firstname, mi } = doc.data()["form"]["profile"];

          return {
            id: doc.id,
            data: doc.data(),
            name: firstname + " " + mi + " " + lastname,
          };
        });

        const group = forms.reduce((group, form) => {
          const { formType } = form.data;

          group[formType] = group[formType] ?? [];
          group[formType].push(form);
          return group;
        }, {});
        setRawRequests(forms);
        setRequests({
          requests: group,
          fetchState: 1,
          count: forms.length
        })
      });

      return () => {
        unsub();
      };
    } catch (e) {
      console.log(e);
      setRequests({ fetchState: -1 })
    }
  }, []);

  return (
    <>
      <div className="relative overflow-hidden w-full flex flex-col bg-white">
        <AdminNavbar2
          profile={props.profile}
          useAuth={useAuth}
          setScreen={setScreen}
          documents={documents}
          notif={notifCount - reads.length}
          className=""
        />
        <div className="h-screen flex flex-row">
          <AdminSidebar
            setScreen={setScreen}
            screen={screen}
            documents={documents}
            count={requests['count']}
            className="flex-1"
          />
          <Dashboard2
            profile={props.profile}
            screen={screen}
            documents={documents}
            setScreen={setScreen}
            notifs={notifs}
            requests={requests}
            reads={reads}
            rawRequests={rawRequests}
          />
        </div>
      </div>
    </>
  );
};

export default AdminLandingpage;
