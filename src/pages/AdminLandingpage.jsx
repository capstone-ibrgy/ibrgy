import React, { useState, useEffect, useReducer } from "react";
import { useAuth } from "../auth/AuthContext";
import AdminNavbar2 from "../components/AdminNavbar2";
import AdminSidebar from "../components/AdminSidebar";
import Dashboard2 from "../pages/Dashboard2";
import { getDocuments, onSnapshot } from "../api/services";

const AdminLandingpage = (props) => {
  const [screen, setScreen] = useState(0);
  const [count, setCount] = useState(0);

  const [documents, setDocuments] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      fetchState: 0,
      documents: [
        {
          id: "cedula",
          name: "Community Tax Certificate (Cedula)",
          description:
            "The official document verifying the resident's financial hardship, qualifying them for social welfare benefits. It serves as proof of their economic disadvantage and is required when applying for government assistance programs, medical aid, or other forms of support for those in need.",
          price: 50,
        },
        {
          id: "clearance",
          name: "Barangay Clearance",
          description:
            "The official document verifying the resident's financial hardship, qualifying them for social welfare benefits. It serves as proof of their economic disadvantage and is required when applying for government assistance programs, medical aid, or other forms of support for those in need.",
          price: 50,
        },
        {
          id: "residency",
          name: "Certificate of Residency",
          description:
            "The official document verifying the resident's financial hardship, qualifying them for social welfare benefits. It serves as proof of their economic disadvantage and is required when applying for government assistance programs, medical aid, or other forms of support for those in need.",
          price: 50,
        },
        {
          id: "indigency",
          name: "Certificate of Indigency",
          description:
            "The official document verifying the resident's financial hardship, qualifying them for social welfare benefits. It serves as proof of their economic disadvantage and is required when applying for government assistance programs, medical aid, or other forms of support for those in need.",
          price: "Free",
        },
      ],
      count: 0,
    }
  );

  useEffect(() => {
    const query = getDocuments();

    try {
      const unsub = onSnapshot(query, (snapshot) => {
        if (!snapshot) {
          setDocuments({ fetchState: -1 });
          return;
        }

        if (snapshot.empty) {
          setDocuments({ fetchState: 2 });
          return;
        }

        const docs = snapshot.docs.map((doc) => doc.data());
        setDocuments({
          documents: docs,
          fetchState: 1,
          length: docs.length,
        });
      });

      return () => {
        unsub();
      };
    } catch (err) {
      console.log(err);
      setDocuments({ fetchState: -1 });
    }
  }, []);

  return (
    <>
      <div className="relative overflow-hidden w-full flex flex-col bg-white">
        <AdminNavbar2
          count={count}
          profile={props.profile}
          useAuth={useAuth}
          setScreen={setScreen}
          documents={documents}
          className=""
        />{" "}
        {/* removed "profile={props.profile} useAuth={useAuth}" */}
        <div className="h-screen flex flex-row">
          <AdminSidebar
            setScreen={setScreen}
            screen={screen}
            documents={documents}
            className="flex-1"
          />
          <Dashboard2
            setCount={setCount}
            profile={props.profile}
            screen={screen}
            documents={documents}
            setScreen={setScreen}
          />{" "}
          {/* removed "profile={props.profile}" */}
        </div>
      </div>
    </>
  );
};

export default AdminLandingpage;
