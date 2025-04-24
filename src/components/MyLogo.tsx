import React from 'react'

export default function MyLogo() {
    return (
        <div className="fixed top-20 left-20">
                <a href="/">
                    {/* Replace with your actual logo image */}
                    <img 
                        src="/images/azlogo_160.png"
                        alt="AZ logo" 
                        className="h-20 w-20"
						
                    />
                    {/* Or use text as logo */}
                    {/* <span className="text-xl font-bold text-purple-500">DP</span> */}
                </a>
            </div>
    );
}