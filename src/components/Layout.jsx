
import Header from '../components/Header';


const Layout = ({children}) => {
    return (
        <div >
       
            <Header></Header>
            <main>{children}</main>
         
           
     

   
        </div>
    )

}
export default Layout