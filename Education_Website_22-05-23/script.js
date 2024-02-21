function Vote() {
    // Mendapatkan nilai dari input
    var nama = document.getElementById("nama").value;
    var umur = parseInt(document.getElementById("umur").value);
    var email = document.getElementById("email").value;
    var tempatTinggal = document.getElementById("tempatTinggal").value;
  
    // Memeriksa apakah ada input yang kosong
    if (nama === '' || umur === '' || isNaN(umur) || email === '' || tempatTinggal === '') {
      // Tampilkan notifikasi jika ada input yang kosong
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Mohon lengkapi semua data!',
      });
    } else if (umur < 17) {
      // Tampilkan notifikasi jika umur kurang dari 17 tahun
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Maaf, hanya orang yang berusia 17 tahun ke atas yang dapat memilih!',
      });
    } else {
      // Tampilkan notifikasi sukses jika semua data terisi dan umur memenuhi syarat
      Swal.fire({
        icon: 'success',
        title: 'Terima kasih!',
        text: 'Suara Anda telah tercatat.',
      });
    }
  }
  