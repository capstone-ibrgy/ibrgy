import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import AdminDashboard from "../screens/admin/AdminDashboard";
import { getAllRequestForms, onSnapshot, Timestamp } from "../api/services";
import Barangay from "./Barangay";
import AdminServices from "./AdminServices";
import Requests from "./Requests";
import Cedula from "../screens/admin/Cedula";
import Clearance from "../screens/admin/Clearance";
import Residency from "../screens/admin/Residency";
import Indigency from "../screens/admin/Indigency";
import Profile from "../screens/admin/Profile";
import AddDocuments from "../screens/admin/AddDocuments";

function Dashboard2({ profile, screen, setScreen }) {
  //const { currentUser, logout } = useAuth();

  const [entries, setEntries] = useState([]);
  const [fetchState, setFetchState] = useState(0);

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
  }, []);

  const screens = [
    {
      screen: "Dashboard",
      component: <AdminDashboard profile={profile} />,
    },
    { screen: "The Barangay", component: <Barangay /> },
    {
      screen: "Services",
      component: <AdminServices setScreen={setScreen} />,
    },
    {
      screen: "Requests",
      component: (
        <Requests
          fetchState={fetchState}
          setScreen={setScreen}
          forms={entries}
        />
      ),
    },
    {
      screen: "Requests > Cedula",
      component: <Cedula forms={entries["cedula"]} />,
    },
    {
      screen: "Requests > Barangay Clearance",
      component: <Clearance forms={entries["clearance"]} />,
    },
    {
      screen: "Requests > Certificate of Residency",
      component: <Residency forms={entries["residency"]} />,
    },
    {
      screen: "Requests > Certificate of Indigency",
      component: <Indigency forms={entries["indigency"]} />,
    },
    { screen: "Profile > My Profile", component: <Profile /> },
    { screen: "Services > Add Documents", component: <AddDocuments /> },
  ];

  return (
    <>
      <div className="mt-16 flex flex-col w-full py-6 font-arimo text-[#1F2F3D]">
        <div className="w-[85%] h-full self-center">
          <h1 className="text-sm font-bold">
            {"Home > "}
            <span className="cursor-pointer hover:text-[#1B75BC]">
              {screens[screen].screen}
            </span>
          </h1>
          {screens[screen].component}
        </div>
      </div>
    </>
  );
}

export default Dashboard2;
