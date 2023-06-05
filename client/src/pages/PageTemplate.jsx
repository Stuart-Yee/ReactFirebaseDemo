import NavBar from "../components/NavBar";

const PageTemplate = ({children}) => {
    return(
        <div>
            <NavBar/>
            {children}
            <footer className="absolute bottom-0 flex justify-between p-3 w-full">
                <p className="w-1/3">Copyright 2023 Lorem Ipsum Inc.</p>
                <p className="w-1/3">Privacy Policy</p>
                <p className="w-1/3">Contact Us</p>
            </footer>
        </div>
    )
}

export default PageTemplate;