import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { App } from './App'
import { LinkedList } from './LinkedList/LinkedList'
import { ImplementationLinkedList } from './LinkedList/ImplementationLinkedList'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/LinkedList",
    element: <LinkedList />,
  },
  {
    path: "/LinkedList/Implementation",
    element: <ImplementationLinkedList />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
