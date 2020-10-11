import { mensaje } from './string';

/* describe('Pruebas de strings');
it('Debe de regresar un string'); */

describe('Prueba de strings', () => {

    it('Debe regresar un string', () => {

        const resp = mensaje('Agustín');

        expect(typeof resp).toBe('string');
    
    });

    it('Debe regresar un saludo con el nombre', () => {

        const nombre = 'Juan'
        const resp = mensaje(nombre);

        expect(resp).toContain(nombre);
        
    });

});