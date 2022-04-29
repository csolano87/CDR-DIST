

export interface ListaOrdenes {
    ok:           boolean;
    listaordenes: Listaordene[];
}

export interface Listaordene {
    diffgrID:         string;
    msdataRowOrder:   string;
    RegisterHour:     string;
    RegisterYear:     string;
    OrderStatus:      string;
    Use:              string;
    SpecimenList:     string;
    IsOrderValidated: string;
    PatientID1:       string;
    PatientID2:       string;
    FirstName:        string;
    LastName:         string;
    SecondSurname:    string;
    SurNameAndName:   string;
    DateOfBirth:      Date;
    Age:              string;
    Sex:              string;
    D107:             string;
    SampleID:         string;
    RegisterDate:     Date;
    Doctor:           string;
    Service:          string;
    Origin:           string;
}
