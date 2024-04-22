import pyperclip
def calculate_average_vw(min_px, max_px, viewport_width):
    average_vw = ((min_px + max_px)  ) / viewport_width * 100
    result = f'clamp({min_px}px, {average_vw:.2f}vw, {max_px}px)'
    pyperclip.copy(result)
    return result

# Минимальный и максимальный размеры шрифта в пикселях


# Ширина области просмотра в пикселях (пример)
viewport_width_px = 1920

# Вычисляем среднее значение в vw
average_font_size_vw = calculate_average_vw(9,14, viewport_width_px)

print(average_font_size_vw)
