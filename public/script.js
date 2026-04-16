const form = document.getElementById('reportForm')
const list = document.getElementById('reportList')

// LOAD DATA
async function loadReports() {
    if (!list) return

    try {
        const res = await fetch('/api/reports')
        const data = await res.json()

        list.innerHTML = ''
        data.forEach(r => {
            //         const li = document.createElement('li')

            //         li.innerHTML = `
            //     <strong>${r.title}</strong><br>
            //     📍 ${r.location}<br>
            //     ${r.description}<br>
            //     ${r.image_url ? `<img src="/uploads/${r.image_url}" width="200">` : ''}
            // `

            //         list.appendChild(li)
            const tr = document.createElement('tr')

            tr.innerHTML = `
    <td>${r.title}</td>
    <td>${r.description}</td>
    <td>${r.location}</td>
    <td>
        ${r.image_url ? `<img src="/uploads/${r.image_url}">` : '-'}
    </td>
`

            list.appendChild(tr)
        })
    } catch (err) {
        console.error('LOAD ERROR:', err)
    }
}

// SUBMIT FORM
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const formData = new FormData(form)

        try {
            const res = await fetch('/api/reports', {
                method: 'POST',
                body: formData
            })

            const result = await res.json()
            console.log(result)

            if (!res.ok) {
                alert('Gagal kirim data')
                return
            }

            alert('Berhasil!')
            form.reset()

        } catch (err) {
            console.error('SUBMIT ERROR:', err)
            alert('Server error')
        }
    })
}

loadReports()