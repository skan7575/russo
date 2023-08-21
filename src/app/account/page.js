'use client'
import {fetchProducts, getCurrentUser} from "@/Api/Woocommerce/woocommerce";
import {useContext, useEffect, useState} from "react";
import React from 'react';
import AccountInfo from "@/components/Account/AccountInfo/AccountInfo";
import {useUserContext} from "@/Context/UserContext";

function Account() {


    return (
        <div>
            <AccountInfo />
        </div>
    );
}

export default Account



