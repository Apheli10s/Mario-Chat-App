import { useContext } from "react";
import { SignInForm } from "../components/SignInForm";
import { AppContext } from "../contexts/AppContext";
import { Link, Navigate } from "react-router-dom";

export function SignInPage(){
    const context = useContext(AppContext);
   
    function handleSubmit(formData){
        context.setUsername(formData.username);
        context.setAvatarIndex(formData.avatarIndex)
    }

    if (context.isSignedIn){
        return <Navigate to="/chat" replace />;
    }

    return (
        <div className ="sign-in-page">
            <div className="card">
                <SignInForm onSubmit={handleSubmit} />
                <Link to="/faq" style={{color: 'white', marginLeft: '47%', textDecoration: 'none'}}>Read the FAQ!</Link>
            </div>
        </div>
    );
};