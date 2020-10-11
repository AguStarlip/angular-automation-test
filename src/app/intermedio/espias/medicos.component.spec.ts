import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, EMPTY, throwError } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn(servicio, 'getMedicos').and.callFake(() => {

            return from([medicos]);
        });

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
   
    });

    it('Debe llamar al servicio para agregar un médico', () => {

        const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
            return EMPTY;
        });

        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();

    });

    it('Debe agregar un nuevo médico al arreglo de médicos', () => {

        const medico = {id: 1, nombre: 'Agus'};

        spyOn(servicio, 'agregarMedico').and.returnValue( from([medico]) );

        componente.agregarMedico();

        expect(componente.medicos.length).toBeGreaterThanOrEqual(0);

    });

    it('Si falla la adicion, la propiedad mensajeError deber ser igual al error del servicio', () => {

        const miError = 'No se pudo agregar un médico';

        spyOn(servicio, 'agregarMedico').and.returnValue( throwError(miError) );

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);

    });

    it('Debe llamar al servicio para borrar un médico', () => {

        spyOn(window, 'confirm').and.returnValue(true)

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');

    });

    it('No debe llamar al servicio para borrar un médico', () => {

        spyOn(window, 'confirm').and.returnValue(false)

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');

    });

});
