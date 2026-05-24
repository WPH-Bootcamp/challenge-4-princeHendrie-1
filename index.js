const prompt = require('prompt-sync')({ sigint: true });

// --- Fungsi Operasi Matimatika ---
function tambah(a, b) {
  return a + b;
}
function kurang(a, b) {
  return a - b;
}
function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return b === 0 ? 'Error: Pembagian dengan nol tidak diperbolehkan!' : a / b;
}

function modulo(a, b) {
  return b === 0 ? 'Error: Modulo dengan nol tidak diperbolehkan!' : a % b;
}

function pangkat(a, b) {
  return Math.pow(a, b);
}
// ==========================================

// --- Fungsi Validasi Input ---
function getInputAngka(pesan) {
  while (true) {
    let input = prompt(pesan);
    let angka = Number(input);

    if (!isNaN(angka) && input.trim() !== '') {
      return angka;
    }
    console.log('❌ Input salah! Harap masukkan angka yang valid.');
  }
}

function getInputOperator(pesan) {
  const operatorValid = ['+', '-', '*', '/', '%', '^'];
  while (true) {
    let op = prompt(pesan).trim();
    if (operatorValid.includes(op)) {
      return op;
    }
    console.log(
      '❌ Operator tidak valid! Pilih salah satu dari (+, -, *, /, %, ^)'
    );
  }
}
// ==========================================

// --- Fungsi Analisa Data ---
function analisisHasil(hasil) {
  console.log('\n --- Hasil Analisa Data ---');

  const hasilFinal = hasil ?? 'Error: Hasil tidak terdefinisi (null/undefined)';

  if (typeof hasilFinal === 'string') {
    console.log(`⚠️ ${hasilFinal}`);
    return;
  }

  if (typeof hasilFinal === 'number') {
    console.log(`➡️ Hasil Akhir: ${hasilFinal}`);

    let SifatAngka =
      hasilFinal > 0 ? 'Positif' : hasilFinal < 0 ? 'Negatif' : 'Nol';
    console.log(`• Sifat Angka : ${SifatAngka}`);

    let tipeAngka = Number.isInteger(hasilFinal)
      ? 'Integer (Bilangan Bulat)'
      : 'Desimal';
    console.log(`• Tipe Angka  : ${tipeAngka}`);

    if (Number.isInteger(hasilFinal) && hasilFinal !== 0) {
      let paritas = hasilFinal % 2 === 0 ? 'Genap' : 'Ganjil';
      console.log(`• Paritas     : ${paritas}`);
    } else if (hasilFinal === 0) {
      console.log(`• Paritas     : Netral (Nol)`);
    } else {
      console.log(`• Paritas     : Tidak berlaku untuk desimal`);
    }
  }
}
// ==========================================

// --- Fungsi Menjalankan Kalkultor ---
function jalankanKalkulator() {
  console.log('-----------------------------------------');
  console.log(' Interactive Calculator & Data Analyzer ');
  console.log('------------------------------------------');

  while (true) {
    let angka1 = getInputAngka('\nMasukkan angka pertama: ');
    let operator = getInputOperator('Masukkan operator (+, -, *, /, %, ^): ');
    let angka2 = getInputAngka('Masukkan angka kedua: ');

    let hasil;

    switch (operator) {
      case '+':
        hasil = tambah(angka1, angka2);
        break;
      case '-':
        hasil = kurang(angka1, angka2);
        break;
      case '*':
        hasil = kali(angka1, angka2);
        break;
      case '/':
        hasil = bagi(angka1, angka2);
        break;
      case '%':
        hasil = modulo(angka1, angka2);
        break;
      case '^':
        hasil = pangkat(angka1, angka2);
        break;
      default:
        hasil = null;
    }

    analisisHasil(hasil);

    console.log('\n-----------------------------------------');
    let konfirmasi = prompt(
      'Apakah ingin melakukan perhitungan lagi? (yes/no): '
    )
      .toLowerCase()
      .trim();

    if (konfirmasi === 'no' || konfirmasi === 'n') {
      console.log(
        '\n Terima kasih telah menggunakan program ini. Sampai jumpa!'
      );
      break;
    }
  }
}
// ==========================================

jalankanKalkulator();
