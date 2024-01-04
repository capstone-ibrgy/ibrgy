import React, { useEffect, useReducer, useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'
import { getDocuments, onSnapshot } from '../api/services';

const Landingpage = (props) => {

  const [screen, setScreen] = useState(0);

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

  return <>
    <div className='relative overflow-hidden w-full flex flex-col bg-white'>
      <Navbar2 documents={documents} profile={props.profile} useAuth={useAuth} setScreen={setScreen} className='' />
      <div className='h-screen flex flex-row'>
        <Sidebar services={documents} screen={screen} setScreen={setScreen} className='flex-1' />
        <Dashboard documents={documents} setScreen={setScreen} screen={screen} profile={props.profile} />
      </div>
    </div>
  </>
}

export default Landingpage