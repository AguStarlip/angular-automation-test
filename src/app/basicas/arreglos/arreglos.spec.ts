import { obtenerRobots } from './arreglos';


describe('Prueba de arreglos', () => {

    it('Debe retornar almenos 3 robots', () => {

        const resp = obtenerRobots();
        expect(resp.length).toBeGreaterThanOrEqual(3);

    });

    it('Debe existir Ultron y Jarvis', () => {

        const resp = obtenerRobots();
        expect(resp).toContain('Ultron');
        expect(resp).toContain('Jarvis');

    });

});
