import { formateladate } from "@/lib/dateformatter";
import { useCallback } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { lelogo } from "../utils/functions";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const useGeneratePDF = (props, setPdfUrl) => {
  const generatePDF = useCallback(() => {
    const genre = props?.sexe === "Masculin" ? "Mr" : "Mme";
    const datenaissance = formateladate(props?.datenaissance);
    const datededeclaration = formateladate(props?.datededeclaration);
    const docDefinition = {
      content: [
        [lelogo],
        [
          { text: "DECLARATION PERSONNELLE DE CANDIDATURE", style: "header" },
          {
            text: "Chaque déclaration personnnelle de candidature doit être deposée à la CEI, en double exemplaire",
            style: "normal",
          },
          { text: "\n", style: "normal" },
          {
            text: `Je soussignée : ${genre} ${props?.prenom} ${props?.nom}`,
            style: "normal",
          },
          {
            text: `Date et lieu de naissance : ${datenaissance} à ${props?.lieunaissance}`,
            style: "normal",
          },
          { text: `Nationalité :  ${props?.nationalite}`, style: "normal" },
          {
            text: `Nom et prénoms du père :  ${props?.nometprenomspere}`,
            style: "normal",
          },
          {
            text: `Nom et prénoms de la mère :  ${props?.nometprenomsmere}`,
            style: "normal",
          },
          {
            text: `Nationalité:  - du père :  ${props?.nationalitepere} -de la mère :  ${props?.nationalitemere} `,
            style: "normal",
          },
          { text: `Profession :  ${props?.profession}`, style: "normal" },
          { text: `Domicile :  ${props?.domicile}`, style: "normal" },
          {
            text: `Telephone :  ${props?.telephone} Adresse :  ${props?.adresse}`,
            style: "normal",
          },
          {
            text: `Carte Electeur n° :  ${props?.numeroelecteur} CNI n° :  ${props?.numerocni}`,
            style: "normal",
          },
          {
            text: `Intitulé de la liste :  ${props?.intituledeliste}`,
            style: "normal",
          },
          {
            text: `Numéro dordre sur la liste :  ${props?.numerodordre}`,
            style: "normal",
          },
          { text: `Resident ? :  ${props?.resident}`, style: "normal" },
          {
            text: `Parti(s) ou groupement(s) politique(s) parrainant la candidature : ${props?.partiougroupementpolitique}`,
            style: "normal",
          },
          {
            text: `Commune n° :  ${props?.numerocirconscription}`,
            style: "normal",
          },
          {
            text: `Designation :  ${props?.nomcirconscription}`,
            style: "normal",
          },
          {
            text: `Fait à :  ${props?.lieudedeclaration} le ${datededeclaration}`,
            style: "normal",
          },
          { text: "Signature légalisée", style: "normal" },
        ],
      ],
      styles: {
        header: { fontSize: 18, bold: true, align: "center" },
        subheader: { fontSize: 14, bold: true },
        normal: { fontSize: 14, bold: false, margin: 5 },
      },
    };
    if (props) {
      const pdfDocGenerator = pdfMake.createPdf(docDefinition);
      pdfDocGenerator.getBlob((blob) => {
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      });
    }
  }, [props, setPdfUrl]);

  return generatePDF;
};
