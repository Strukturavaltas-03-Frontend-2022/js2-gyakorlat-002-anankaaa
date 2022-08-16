const numericConverter = (number10) => {
    let binary = (number10).toString(2);
    let octal = (number10).toString(8);
    let hexa = (number10).toString(16);
    return {
        binary: binary,
        octal: octal,
        hexa: hexa
    }
} 

export default numericConverter;

