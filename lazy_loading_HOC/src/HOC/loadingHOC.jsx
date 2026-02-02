const LoadingHOC=(Component)=>{
    return function(props){
        console.log(props)
        if(props.isLoading){
            return <h3>Loading</h3>
        }
        return <Component {...props}/>
    }
}

export default LoadingHOC;