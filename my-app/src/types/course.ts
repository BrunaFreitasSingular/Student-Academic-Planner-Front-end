export type Course = {
  id: number | null
  name: string
  requiredCredits: number
  transferredCredits: number
  electiveCredits: number
  complementaryCredits: number
  numberOfComplementaryTypes: number
  extensionHours: number
}
