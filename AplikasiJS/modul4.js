// Modul untuk pembagian
module.exports.division = function (a, b) {
    if (b === 0) {
        throw new Error("Pembagian oleh nol tidak diperbolehkan");
    }
    return a / b;
};
