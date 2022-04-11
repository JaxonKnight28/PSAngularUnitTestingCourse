import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
    it('should display weak if strength is less than 5', () => {
        //arrange
        const pipe = new StrengthPipe();
        //act
        let result = pipe.transform(5);
        //assert
        expect(result).toEqual('5 (weak)');
    });

    it('should display strong if strength is more than 10', () => {
        //arrange
        const pipe = new StrengthPipe();
        //act
        let result = pipe.transform(11);
        //assert
        expect(result).toEqual('11 (strong)');
    });

    it('should display unbelievable if strength is more than 20', () => {
        //arrange
        const pipe = new StrengthPipe();
        //act
        let result = pipe.transform(22);
        //assert
        expect(result).toEqual('22 (unbelievable)');
    });

}); 