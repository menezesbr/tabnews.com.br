import { Box, EmptyState, Link, PastTime, Text, Tooltip } from '@/TabNewsUI';
import { ChevronLeftIcon, ChevronRightIcon, CommentIcon } from '@/TabNewsUI/icons';

export default function ContentList({ contentList: list, pagination, paginationBasePath, emptyStateProps }) {
  const listNumberOffset = pagination.perPage * (pagination.currentPage - 1);

  const previousPageUrl = `${paginationBasePath}/${pagination?.previousPage}`;
  const nextPageUrl = `${paginationBasePath}/${pagination?.nextPage}`;

  return (
    <>
      {list.length > 0 ? (
        <Box
          sx={{
            display: 'grid',
            gap: '0.5rem',
            gridTemplateColumns: 'auto minmax(0, 1fr)',
          }}>
          <RenderItems />
          <EndOfRelevant />
        </Box>
      ) : (
        <RenderEmptyMessage {...emptyStateProps} />
      )}

      {list.length > 0 ? (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            gap: 4,
            m: 4,
            mb: 2,
          }}>
          {pagination.previousPage ? (
            <Link href={previousPageUrl} scroll={false}>
              <ChevronLeftIcon size={16} />
              Anterior
            </Link>
          ) : (
            <Text color="fg.muted">
              <ChevronLeftIcon size={16} />
              Anterior
            </Text>
          )}

          {pagination.nextPage ? (
            <Link href={nextPageUrl}>
              Próximo
              <ChevronRightIcon size={16} />
            </Link>
          ) : (
            <Text color="fg.muted">
              Próximo
              <ChevronRightIcon size={16} />
            </Text>
          )}
        </Box>
      ) : null}
    </>
  );

  function RenderItems() {
    function ChildrenDeepCountText({ count }) {
      return count > 1 ? `${count} comentários` : `${count} comentário`;
    }

    function TabCoinsText({ count }) {
      return count > 1 || count < -1 ? `${count} tabcoins` : `${count} tabcoin`;
    }

    return list.map((contentObject, index) => {
      const itemCount = index + 1 + listNumberOffset;
      return [
        <Box key={itemCount} sx={{ textAlign: 'right' }}>
          <Text sx={{ fontSize: 2, color: 'fg.default', fontWeight: 'semibold', textAlign: 'right' }}>
            {itemCount}.
          </Text>
        </Box>,
        <Box as="article" key={contentObject.id}>
          <Box
            sx={{
              overflow: 'auto',
              fontWeight: 'semibold',
              fontSize: 2,
              '> a': {
                ':link': {
                  color: 'fg.default',
                },
                ':visited': {
                  color: 'fg.subtle',
                },
              },
            }}>
            {contentObject.parent_id ? (
              <Link
                sx={{ wordWrap: 'break-word', fontStyle: 'italic', fontWeight: 'normal' }}
                href={`/${contentObject.owner_username}/${contentObject.slug}`}>
                <CommentIcon verticalAlign="middle" size="small" />
                {` "${contentObject.body}"`}
              </Link>
            ) : (
              <Link sx={{ wordWrap: 'break-word' }} href={`/${contentObject.owner_username}/${contentObject.slug}`}>
                {contentObject.title}
              </Link>
            )}
          </Box>
          <Box
            sx={{
              display: 'grid',
              gap: 1,
              gridTemplateColumns:
                'max-content max-content max-content max-content minmax(20px, max-content) max-content max-content',
              fontSize: 0,
              whiteSpace: 'nowrap',
              color: 'neutral.emphasis',
            }}>
            <Text>
              <TabCoinsText count={contentObject.tabcoins} />
            </Text>
            {' · '}
            <Text>
              <ChildrenDeepCountText count={contentObject.children_deep_count} />
            </Text>
            {' · '}
            <Tooltip aria-label={`Autor: ${contentObject.owner_username}`}>
              <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <Link sx={{ color: 'neutral.emphasis' }} href={`/${contentObject.owner_username}`}>
                  {contentObject.owner_username}
                </Link>
              </Box>
            </Tooltip>
            {' · '}
            <Text>
              <PastTime direction="nw" date={contentObject.published_at} />
            </Text>
          </Box>
        </Box>,
      ];
    });
  }

  function EndOfRelevant() {
    if (paginationBasePath == '/pagina' && !pagination.nextPage)
      return [
        <Box key={0} sx={{ textAlign: 'right' }}>
          <Text
            sx={{ fontSize: 2, color: 'fg.default', fontWeight: 'semibold', textAlign: 'right', visibility: 'hidden' }}>
            0.
          </Text>
        </Box>,
        <Box key={-1}>
          <Link sx={{ wordWrap: 'break-word' }} href={'/recentes'}>
            <Box
              sx={{
                overflow: 'auto',
                fontWeight: 'semibold',
                fontSize: 2,
              }}>
              Fim dos conteúdos relevantes mais atuais
            </Box>
            <Box sx={{ fontSize: 0 }}>Veja todos os conteúdos que já foram publicados na seção Recentes.</Box>
          </Link>
        </Box>,
      ];
    return null;
  }

  function RenderEmptyMessage(props) {
    return <EmptyState title="Nenhum conteúdo encontrado" {...props} />;
  }
}
