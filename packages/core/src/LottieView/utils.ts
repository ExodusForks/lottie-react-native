function parsePossibleSources(source): { sourceJson?: string } | undefined {
  if (typeof source === 'object') {
    return { sourceJson: JSON.stringify(source) };
  }

  return undefined;
}

export { parsePossibleSources };
