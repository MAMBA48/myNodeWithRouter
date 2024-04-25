//middleware de verificação/autenticação
const VerifyingMid = (req: any, res: any, next: any) => {
    console.log('Notificação: ')
    next()
}

export default VerifyingMid