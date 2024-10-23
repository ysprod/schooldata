import { Button } from "@nextui-org/react";

export interface BoutonformProps {
  handleReset: () => void;
  texteboutonvalidation: string;
}

export const Boutonform = ({
  handleReset,
  texteboutonvalidation,
}: BoutonformProps) => {
  return (
    <div className="flex items-center justify-end mt-6 gap-x-6">
      <Button
        type="button"
        onClick={handleReset}
        className="px-3 py-2 text-sm font-semibold text-white bg-orange-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Annuler
      </Button>
      <Button
        color="primary"
        type="submit"
        className="p-2 px-6 py-2 font-bold text-white bg-green-600 rounded cursor-pointer md:p-4 hover:bg-blue-500"
      >
        {texteboutonvalidation}
      </Button>
    </div>
  );
};
