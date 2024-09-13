"use client";

import { useState } from "react";
import { SigninFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
    const [state, setState] = useState<SigninFlow>('signIn')
    return (
        <div className="h-full flex items-center justify-center bg-[#5c3b58]">
            <div className="md:h-auto md:w-[420px]">
                {state === 'signIn' ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />}
            </div>
        </div>
    )
}