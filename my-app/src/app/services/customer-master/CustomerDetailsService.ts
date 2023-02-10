import { from, Observable } from 'rxjs';
import { get, post, put, delete_} from "../../utils/api/ApiUtil";
const API="http://192.168.1.102:5000/api";

export function saveCustomerDetailsService(data: any): Observable<any> {
    return from(post(`${API}/customer/create`,data));
}

export function updateCustomerDetailsService(customerId:any,data: any): Observable<any> {
    return from(put(`${API}/customer/edit/${customerId}`,data));
}

export function deleteCustomerDetailsService(customerId: any): Observable<any> {
    return from(delete_(`${API}/customer/delete/${customerId}`));
}

// export function searchCustomerDetailsService(pageIndex: number, pageSize: number, searchTerm: string): Observable<any> {
//     return from(get(`${API}//search?pageNo=${pageIndex}&pageSize=${pageSize}&search=${searchTerm}`));
// }
// export function getCustomerTypeLOVService(companyId: any, locationId:any): Observable<any> {
//     return from(get(`${API}//list?companyId=${companyId}&locationId=${locationId}`))
// }
export function getCustomerDetailsService(pageIndex: number, pageSize: number, companyId: number): Observable<any> {
    return from(get(`${API}/customer/${companyId}/${pageIndex}/${pageSize}`));
}
export function getCustomerByIdService(customerId:any,status:number,companyId: number): Observable<any> {
    return from(get(`${API}/customer/getbyid/${customerId}/${status}/${companyId}`));
}
