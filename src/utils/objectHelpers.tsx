import {UserType} from "../redux/store";

export const updateObjectInArray = (items:Array<UserType>, itemId:string | number, objPropName:any, newObjProps:object) => {
    items.map((u:any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}
