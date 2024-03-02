import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { Sale } from "./models";
import { User } from "../alumnos-users/models";
import { catchError, concatMap, throwError } from "rxjs";


@Injectable({ providedIn: 'root' })
export class InscripcionesService {
  constructor(private http: HttpClient) {}

  getInscripciones() {
    return this.http.get<Sale[]>(
      `${environment.apiURL}/inscriptions?_embed=user&_embed=Course`);
  }
  getSalesById(userId: string | number) {
    return this.http.get<User>(`${environment.apiURL}/users/${userId}`).pipe(
      concatMap((user) =>
        this.http.get(`${environment.apiURL}/inscripcions?userId=${user.id}`)
      ),
      catchError((error) => {
        alert('Ocurrio un error');
        return throwError(() => error);
      })
    );
  }

  //createSale(data: CreateSaleData) {
    //return this.http.post<Sale>(`${environment.apiURL}/sales`, data);
  }



