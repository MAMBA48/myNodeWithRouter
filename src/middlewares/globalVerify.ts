
const GlobalVerify = (req: any, res: any, next: any) => {
    console.log('Notificação de verificação global: ')
    next()
}

export default GlobalVerify