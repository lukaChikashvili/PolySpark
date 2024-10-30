import CanvasPage from "./components/CanvasPage"
import Header from "./components/Header"
import RightSidebar from "./components/RightSidebar"
import Sidebar from "./components/Sidebar"

function App() {
 
  return (
    <>
      <Header />

      <div className="flex h-screen">
        <Sidebar />
        <CanvasPage />
        <RightSidebar />
      </div>
    </>
  )
}

export default App
