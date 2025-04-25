import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MyLogo() {
    return (
        <div className="pl-20 mt-20 lg:fixed">
                <Link href="/" passHref>
                    {/* Replace with your actual logo image */}
                    <Image 
                        src="/images/azlogo_160.png"
                        alt="AZ logo" 
                        width={60}
                        height={60}
                        />
                    {/* Or use text as logo */}
                    {/* <span className="text-xl font-bold text-purple-500">DP</span> */}
                </Link>
        </div>
    );
}