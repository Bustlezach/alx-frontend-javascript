function guardrail(mathFunction) {
  try {
    const calc = mathFunction();
    return [calc, 'Guardrail was processed'];
  } catch (err) {
    return [`Error: ${err.message}`, 'Guardrail was processed'];
  }
}

export default guardrail;
