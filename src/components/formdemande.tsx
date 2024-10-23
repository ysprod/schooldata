import { useState } from "react";
import Radioinput, { Radioinputwithoutvalue } from "./ecoleplus/radioinput";
import Texteinput from "./ecoleplus/texteinput";
import {
  DemandeFormProps,

} from "../app/components/demandeForm";
import { Boutonform } from "./boutonform";
import { OptionRadio } from "../app/utils/types";

export const optionsGenre: OptionRadio[] = [
  { value: "Masculin", label: "Masculin" },
  { value: "Feminin", label: "Feminin" },
];

export const optionsNaturalise: OptionRadio[] = [
  { value: "OUI", label: "OUI" },
  { value: "NON", label: "NON" },
];

export interface Props {
  formData: DemandeFormProps;
  setFormData: React.Dispatch<React.SetStateAction<DemandeFormProps>>;
  handleReset: () => void;
  texteboutonvalidation: string;
}

export const Formdemande = ({
  formData,
  setFormData,
  handleReset,
  texteboutonvalidation,
}: Props): JSX.Element => {
  const [showNaturalise, setShowNaturalise] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRadionaturaliseChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowNaturalise(e.target.value === "OUI");
  };

  return (
    <>
      <div className="grid grid-cols-1 mt-8 gap-x-5 gap-y-7 sm:grid-cols-6">
        <Texteinput
          titre="Prenom(s)"
          name="prenom"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Nom"
          name="nom"
          formData={formData}
          handleChange={handleChange}
          autocomplete="family-name"
        />
        <Radioinput
          titre="Sexe"
          name="sexe"
          formData={formData}
          handleChange={handleChange}
          options={optionsGenre}
        />
        <Texteinput
          titre="Date de naissance"
          name="datenaissance"
          formData={formData}
          handleChange={handleChange}
          letype="date"
        />
        <Texteinput
          titre="Lieu de  naissance"
          name="lieunaissance"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Nationalité"
          name="nationalite"
          formData={formData}
          handleChange={handleChange}
        />
        <Radioinputwithoutvalue
          titre="Naturalisé(e) ?"
          name="naturalise"
          formData={formData}
          handleChange={handleRadionaturaliseChange}
          options={optionsNaturalise}
          checkfirst={showNaturalise}
        />
        {showNaturalise && (
          <>
            <Texteinput
              titre="Date de naturalisation"
              name="datedenaturalisation"
              formData={formData}
              handleChange={handleChange}
              letype="date"
            />
            <Texteinput
              titre="N° et date du decret de naturalisation"
              name="datedecretdenaturalisation"
              formData={formData}
              handleChange={handleChange}
            />
          </>
        )}
        <Texteinput
          titre="Nom et prénoms du père"
          name="nometprenomspere"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Nom et prénoms de la mère"
          name="nometprenomsmere"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Nationalité du père"
          name="nationalitepere"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Nationalité de la mère"
          name="nationalitemere"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Profession"
          name="profession"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Domicile"
          name="domicile"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Adresse"
          name="adresse"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="telephone"
          name="telephone"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Carte Electeur n°"
          name="numeroelecteur"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="CNI n°"
          name="numerocni"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Intitulé de la liste"
          name="intituledeliste"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Numéro dordre sur la liste"
          name="numerodordre"
          formData={formData}
          handleChange={handleChange}
        />
        <Radioinput
          titre="Resident ?"
          name="resident"
          formData={formData}
          handleChange={handleChange}
          options={optionsNaturalise}
        />
        <Texteinput
          titre="Parti(s) ou groupement(s) politique(s) parrainant la candidature"
          name="partiougroupementpolitique"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Commune n°"
          name="numerocirconscription"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Designation"
          name="nomcirconscription"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="Fait à"
          name="lieudedeclaration"
          formData={formData}
          handleChange={handleChange}
        />
        <Texteinput
          titre="le"
          name="datededeclaration"
          formData={formData}
          handleChange={handleChange}
          letype="date"
        />
      </div>
      <Boutonform
        handleReset={handleReset}
        texteboutonvalidation={texteboutonvalidation}
      ></Boutonform>
    </>
  );
};
