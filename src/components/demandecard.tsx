import DateFormatter from "@/lib/dateformatter";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";
import React from "react";
import { Student } from "@prisma/client";

export interface DemandecardProps {
  affichebouton?: boolean;
  demande: Student;
  children?: React.ReactNode;
}

export default function Demandecard({
  affichebouton = true,
  demande: props,
  children,
}: DemandecardProps) {
  return (
    <>
      <Card className="w-auto">
        <CardHeader className="flex">{children}</CardHeader>
        <Divider />
        <CardBody>
          <p className="m-1">Prenom(s) : {props.firstName}</p>
          <p className="m-1">Nom : {props.lastName}</p>
          <p className="m-1">Sexe : {props.sex}</p>
          <DateFormatter
            className="m-1"
            dateString={props.birthday}
            titre="Date de naissance :"
          ></DateFormatter>
          
        </CardBody>
        {affichebouton && (
          <>
            <Divider />
            <CardFooter>
              <div className="flex items-center gap-2 space-x-5">
                <Button
                  as={Link}
                  href={"/crud/update/" + props.id}
                  className="align-middle select-none   font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-orange-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Modifier
                </Button>
                <Button
                  as={Link}
                  href={"/pdf/" + props.id}
                  className="align-middle select-none  font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Telecharger PDF
                </Button>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </>
  );
}
