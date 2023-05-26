export function verticalBar({ labels, data }) {
    const documentStyle = getComputedStyle(document.documentElement)

    let datasets = []
    data.map((item) => {
        datasets.push({
            type: 'bar',
            label: item.label,
            backgroundColor: documentStyle.getPropertyValue(`--${item.color}-500`),
            data: item.data
        })
    })

    return {
        labels,
        datasets
    }
}

export function doughnut({ labels, data2 }) {
    const documentStyle = getComputedStyle(document.body)

    return {
        labels,
        datasets: [
            {
                data: data2,
                backgroundColor: [
                    documentStyle.getPropertyValue('--blue-500'),
                    documentStyle.getPropertyValue('--yellow-500'),
                    documentStyle.getPropertyValue('--green-500'),
                    documentStyle.getPropertyValue('--red-500')
                ],
                hoverBackgroundColor: [
                    documentStyle.getPropertyValue('--blue-400'),
                    documentStyle.getPropertyValue('--yellow-400'),
                    documentStyle.getPropertyValue('--green-400'),
                    documentStyle.getPropertyValue('--red-500')
                ]
            }
        ]
    }
}

export function setChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement)
    const textColor = documentStyle.getPropertyValue('--text-color')
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    fontColor: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    }
}
