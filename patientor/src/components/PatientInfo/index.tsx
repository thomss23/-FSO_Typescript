import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import patientService from "../../services/patients";
import { Gender, Patient } from "../../types";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';

const PatientInfo = () => {
  const { id } = useParams<{ id: string }>();

  const [patientInfo, setPatientInfo] = useState<Patient | undefined>(undefined);
  
  useEffect(() => {
    const fetchPatientById = async () => {
      const patient = await patientService.getPatientById(id);
      setPatientInfo(patient);
    };
    void fetchPatientById();
  }, [id]);

  if (!patientInfo) {
    return <div>Loading patient information...</div>;
  }

  return (
    <div>
      <h2>{patientInfo.name}</h2>
      {patientInfo.gender === Gender.Female ? <FemaleIcon></FemaleIcon> 
      : patientInfo.gender === Gender.Male ? <MaleIcon></MaleIcon> : <TransgenderIcon></TransgenderIcon>}
      <p>Occupation: {patientInfo.occupation}</p>
    </div>
  );
};

export default PatientInfo;