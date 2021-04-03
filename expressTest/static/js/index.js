
$.ajax({
    url: 'api/data',
    success(res) {
        const str = `
            <span>
                {{each data}}
                    <span>{{$value}}</span>
                {{/each}}
            </span>
        `
        const tenName = template.render(str, {
            data: res
        })
        $('#root').html(tenName)
    }
})