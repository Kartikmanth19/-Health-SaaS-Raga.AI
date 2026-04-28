import { create } from "zustand";

interface Patient {
  id: number;
  name: string;
  age: number;
}

type ViewType = "grid" | "list";

interface PatientState {
  patients: Patient[];
  view: ViewType;
  search: string;

  toggleView: () => void;
  setSearch: (value: string) => void;

  addPatient: (patient: Omit<Patient, "id">) => void;
  deletePatient: (id: number) => void;
  updatePatient: (id: number, updated: Partial<Patient>) => void;

  filteredPatients: () => Patient[];
}

export const usePatientStore = create<PatientState>((set, get) => ({
  view: "grid",
  search: "",

  patients: [
    { id: 1, name: "Kartik", age: 30 },
    { id: 2, name: "Ram", age: 25 },
    { id: 3, name: "Sita", age: 22 },
    { id: 4, name: "Lakhan", age: 28 },
    { id: 5, name: "Modi", age: 24 },
  ],

  toggleView: () =>
    set((state) => ({
      view: state.view === "grid" ? "list" : "grid",
    })),

  setSearch: (value) => set({ search: value }),

  addPatient: (patient) =>
    set((state) => {
      if (!patient.name || patient.age <= 0) {
        console.error("Invalid patient data");
        return state;
      }

      return {
        patients: [
          ...state.patients,
          { ...patient, id: Date.now() },
        ],
      };
    }),

  deletePatient: (id) =>
    set((state) => ({
      patients: state.patients.filter((p) => p.id !== id),
    })),

  updatePatient: (id, updated) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === id ? { ...p, ...updated } : p
      ),
    })),

  filteredPatients: () => {
    const { patients, search } = get();

    return patients.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  },
}));