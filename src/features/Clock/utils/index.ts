/**
 * Вычисляет смещения по координатам на основе угла в градусах и длины.
 *
 * @param {number} degrees - Угол в градусах.
 * @param {number} length - Длина, которая будет умножена на синус и косинус угла.
 * @returns {number[]} Массив, содержащий смещения по оси Y и оси X,
 *                    вычисленные как [sin(angle) * length, cos(angle) * length].
 */

export function offsets(degrees: number, length: number) {
  const angle = (degrees * Math.PI) / 180.0;
  return [length * Math.sin(angle), length * Math.cos(angle)];
}
