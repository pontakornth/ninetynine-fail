export function getInitialPower(): number {
	return Math.floor(Math.random() * 31)
}

export function getFieldPower(initialPower: number): number {
	// NOTE: In a rare case, the game is unplayable. We don't care for loosers.
	// NOTE: The correct spelling is loser. We also don't care.
	return Math.floor(Math.random() * (initialPower + 20))
}

export function generateFields(initialPower: number, fieldsCount: number): number[] {
	return Array.from({ length: fieldsCount }, () => getFieldPower(initialPower))
}

