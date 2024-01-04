import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import AdminDashboard from "../screens/admin/AdminDashboard";
import { getAllRequestForms, onSnapshot, Timestamp } from "../api/services";
import Barangay from "./Barangay";
import AdminServices from "../screens/admin/AdminServices";
import Requests from "./Requests";
import Profile from "../screens/admin/Profile";
import AddDocuments from "../screens/admin/AddDocuments";
import RequestList from "../screens/admin/RequestList";
import { Alert, Snackbar } from "@mui/material";
import { UserAlert } from "../models/UserAlert";


function Dashboard2({ profile, screen, setScreen, documents }) {
  //const { currentUser, logout } = useAuth();

  const [entries, setEntries] = useState([]);
  const [fetchState, setFetchState] = useState(0);
  const { alert, setAlert } = UserAlert();

  const screens = [
    {
      screen: "Dashboard",
      component: <AdminDashboard profile={profile} setScreen={setScreen} />,
    },
    { screen: "The Barangay", component: <Barangay /> },
    {
      screen: "Services",
      component: <AdminServices
        setAlert={setAlert}
        setScreen={setScreen} />,
    },
    {
      screen: "Requests",
      component: (
        <Requests
          fetchState={fetchState}
          setScreen={setScreen}
          documents={documents}
          forms={entries}
        />
      ),
    },
    { screen: "Profile > My Profile", component: <Profile /> },
    { screen: "Services > Add Documents", component: <AddDocuments /> },
  ];

  useEffect(() => {
    const query = getAllRequestForms();

    try {
      const unsub = onSnapshot(query, (snapshot) => {
        if (!snapshot) {
          setFetchState(-1);
          return;
        }

        if (snapshot.empty) {
          setFetchState(2);
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

        console.log(group)
        setEntries(group);
        setFetchState(1);
      });

      return () => {
        unsub();
      };
    } catch (e) {
      console.log(e);
      setFetchState(-1);
    }
  }, [documents]);

  return (
    <>
      <div className="mt-16 flex flex-col w-full py-6 font-arimo text-[#1F2F3D]">
        <div className="w-[85%] h-full self-center">
          <h1 className="text-sm font-bold">
            {"Home > "}
            <span className="cursor-pointer hover:text-[#1B75BC]">
              {screen < 6 ? screens[screen].screen :
                `Request > ${documents['documents'][screen - 6].name}`}
            </span>
          </h1>
          {screen < 6 ? screens[screen].component :
            <RequestList
              setAlert={setAlert}
              document={documents['documents'][screen - 6]}
              forms={entries[documents['documents'][screen - 6].id]} />}
        </div>
        {alert.show && <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={alert.show}
          autoHideDuration={alert.duration}
          onClose={() => { setAlert({ show: false }) }}
        >
          <Alert severity={alert.type}>{alert.message}</Alert>
        </Snackbar>}
      </div>
    </>
  );
}

export default Dashboard2;
