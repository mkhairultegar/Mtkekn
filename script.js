let anggota = JSON.parse(localStorage.getItem("anggotaTadarus")) || [];

function simpanData() {
    localStorage.setItem("anggotaTadarus", JSON.stringify(anggota));
}

function tampilkanAnggota() {
    const tabel = document.getElementById("tabelAnggota");
    tabel.innerHTML = "";

    anggota.forEach((item, index) => {
        tabel.innerHTML += `
            <tr>
                <td>${item.nama}</td>
                <td>${item.hadir}</td>
                <td>
                    <button onclick="absen(${index})">Hadir</button>
                </td>
            </tr>
        `;
    });
}

function tambahAnggota() {
    const namaInput = document.getElementById("namaInput");
    const nama = namaInput.value.trim();

    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    anggota.push({ nama: nama, hadir: 0 });
    namaInput.value = "";
    simpanData();
    tampilkanAnggota();
}

function absen(index) {
    anggota[index].hadir += 1;
    simpanData();
    tampilkanAnggota();
}

function resetData() {
    if (confirm("Yakin ingin menghapus semua data?")) {
        localStorage.removeItem("anggotaTadarus");
        anggota = [];
        tampilkanAnggota();
    }
}

tampilkanAnggota();
