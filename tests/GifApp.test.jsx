describe('Pruebas en <GifApp />', () => {
  test('debe de mostrar el componente correctamente', () => {
    render(<GifApp />)
    expect(screen.getByText('GiftApp')).toBeTruthy()
  })

  test('debe validar funcion onNewCategory', () => {
    render(<GifApp />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'One Punch' } })
    fireEvent.submit(form)
    expect(screen.getByText('One Punch')).toBeTruthy()
  })
})