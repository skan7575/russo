'use client'
import {useUserContext} from "@/Context/UserContext";
import {useState} from "react";
import {UpdateUserInfo} from "@/Api/Woocommerce/woocommerce";

export default function AccountInfo({name, phone, email, adress, birthDay}) {
    const { user, setUser } = useUserContext();
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleSaveClick = () => {
        // В этой функции можно обновить данные пользователя и сохранить их
        // Например, через API запрос или каким-либо другим способом
        UpdateUserInfo(1)
        setIsEditing(false);
    };
    return (
        <div>
            <p>Имя: {isEditing ? <input type="text" value={user.first_name} /> : user.first_name}</p>
            <p>Телефон: {isEditing ? <input type="text" value={phone} /> : user.billing?.phone}</p>
            <p>Email: {isEditing ? <input type="text" value={email} /> : user.email}</p>
            <p>Адрес доставки: {isEditing ? <input type="text" value={user.billing?.address_1} /> : user.billing?.address_1}</p>
            <p>Дата рождения: {isEditing ? <input type="text" value={birthDay} /> : birthDay}</p>

            {isEditing ? (
                <button onClick={handleSaveClick}>Сохранить</button>
            ) : (
                <button onClick={handleEditClick}>Редактировать</button>
            )}
        </div>
    );
}

