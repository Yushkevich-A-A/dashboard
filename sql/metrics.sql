SELECT
  *
FROM metrics m
WHERE 'dateTimeRequest' = m.datetime AND m.id > lastRowId