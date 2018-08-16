import HardCodedTreatmentData from './HardCodedTreatmentData.json';

class TreatmentDataAccess {
    getTreatmentData(disease, race, grade) {
        const treatmentOptions = ['Chemo', 'Chemo+Rad', 'Hormonal', 'Radiation',
                                'Surgery', 'Surg+Rad', 'No-Treatment'];

        let deceasedSeries = [];
        let aliveSeries = [];
       
        HardCodedTreatmentData.forEach((v) => {
            if(v.Disease === disease && v.Race === race && v['Dx-Grade'] === grade && v['Is-Alive'] === 'Dead'){
                deceasedSeries.push([ treatmentOptions.indexOf(v['Treat-option'])  , v['Survival-months'] ]);
            }
            if(v.Disease === disease && v.Race === race && v['Dx-Grade'] === grade && v['Is-Alive'] === 'Alive'){
                aliveSeries.push([ treatmentOptions.indexOf(v['Treat-option'])  , v['Survival-months'] ]);
            }  
        });
        
        return [aliveSeries, deceasedSeries];
    }
}

export default TreatmentDataAccess;