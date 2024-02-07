export function console_log(str = 'Test', bgc = '#eee', color = '#111') {
    var style = [
        'padding: 0.1rem 0.5rem;',
        'background-color: '+ bgc +';',
        'color: '+ color +';',
        'font-size: 1rem',
    ].join('');
    console.log ( '%c%s', style, str );
}
