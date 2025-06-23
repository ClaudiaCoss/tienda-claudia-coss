import { useEffect } from "react"

const withLogging = (WrappedComponent) => {

    const WithLoggingComponent = (props) => {

        useEffect(()=>{
            console.log(`${WrappedComponent.name}`)
        },[])
    
    return <WrappedComponent {...props}/>
    }
    return WithLoggingComponent;
}

export default withLogging;