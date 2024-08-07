import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
export default function layout({ children }) {
    return (
        <div>
            <div className='flex '>
                <Sidebar />
                <Navbar />
                {children}
            </div>

        </div>
    );
}
